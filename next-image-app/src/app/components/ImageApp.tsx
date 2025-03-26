"use client"

import { useState, useEffect } from 'react';
import { useGetUsersPhotosLazyQuery, Photo } from '@/generated/graphql';
import "./ImageApp.css";
import Controls from "./Controls";
import Thumbnail from "./Thumbnail";


/**
 * The Photo type from the generated GraphQL types can
 * be used as a starting point for the state type:
 */
type MyPhoto = Pick<Photo, "id" | "title" | "thumbnailUrl" | "url">;

//export default function ImageApp() {
const ImageApp: React.FC = () => {

	/**
	 * Apollo is a full-featured GraphQL client, providing caching and state management.
	 * The useLazyQuery hook can be used to fetch data on demand (one page at a time):
	 *   fetchPhotos({ variables: { ... } }).then((result) => {
	 */
	// const [fetchPhotos, { data, loading, error }] = useLazyQuery(GET_USERS_PHOTOS, { variables: { user: "Clementine Bauch", startIndex: 0 } });
	const [fetchPhotos, { data, loading, error }] = useGetUsersPhotosLazyQuery();
	const [userName, setUserName] = useState<string>("unknown");
	const [numPhotos, setNumPhotos] = useState<number>(0);
	const [fetchedPhotos, setFetchedPhotos] = useState<Array<MyPhoto>>([]);

	useEffect(() => {
		const data = document.getElementsByTagName("h1");
		const newUserName = data?.[0]?.innerText;
		console.log(data);
		console.log(userName);
		setUserName(newUserName);
	});

	const clickHandler = () => {
		fetchPhotos( { variables: { user: userName, startIndex: numPhotos }}).then((result) => {
			const users = result.data?.users?.data;
			if(!users || users.length === 0)
			{
				console.log("could not find users");
				return;
			}
			const user = users[0];
			if (!user || !user.albums)
			{
				console.log("could not find user");
				return;
			}

			const albums = user.albums.data;
			if(!albums || albums.length === 0)
			{
				console.log("could not find albums");
				return;
			}
			const album = albums[0];
			console.log(albums);
			console.log(album);

			if(!album || !album.photos || !album.photos.data || album.photos.data.length === 0)
			{
				console.log("could not find album");
				return;
			}
			const photos = album.photos.data as Array<Photo>;
		
			if(photos)
			{
				const combinedPhotos = fetchedPhotos.concat(photos.filter(photo => photo != null));
				setFetchedPhotos(combinedPhotos);
				setNumPhotos(combinedPhotos.length);
			}

			console.log(photos);
		});
	};


	const photosBody = fetchedPhotos.map((photo) => {
		return <Thumbnail key={photo.id} id={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} url={photo.url}  />
	});

	return (
		<div className="m-4">			
			<div
				className="album grid grid-cols-[repeat(7,_1fr)] gap-4"
				data-testid="container"
			>
				<Controls numImages={numPhotos} onLoadButtonClicked={clickHandler} />
				{photosBody}
			</div>
		</div>
	);
};


export default ImageApp;
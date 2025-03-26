// via.placeholder.com is down, replace with dummyimage.com
const dummyImageUrl = (thumbnailUrl: string) => thumbnailUrl.replace('via.placeholder.com', 'dummyimage.com')


type ThumbnailProps = {
  id: string | null;
  thumbnailUrl: string | null;
  title: string | null;
  url: string | null;
}

const Thumbnail = ({id, thumbnailUrl, title, url}: ThumbnailProps) => {

  return (
    <figure key={id} className="m-0 grid grid-rows-[1fr_auto]">
      <img
        className="block max-w-full row-span-full col-start-1 col-end-1 rounded-sm"
        alt={title ?? "unknown"}
        src={dummyImageUrl(thumbnailUrl ?? "")}
      />
      <figcaption className="row-start-2 row-end-2 col-start-1 col-end-1 py-1 px-2 max-h-full max-w-full truncate justify-self-start bg-white/50">
        {title}
      </figcaption>
    </figure>
  );
};

export default Thumbnail;

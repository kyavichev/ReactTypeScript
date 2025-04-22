
import React, { useState, useRef } from 'react';
import './Velocity.css';


type ResultData = {
	accelerationDistance: number,
	coastingDistance: number,
	brakingDistance: number,
	duration: number,
	accelerationDuration: number,
	brakingDuration: number,
	coastingDuration: number,
	topSpeed: number,
};

export default function Velocity() {

	const [acceleration, setAcceleration] = useState<number>(5);
	const [braking, setBraking] = useState<number>(4);
	const [maxSpeed, setMaxSpeed] = useState<number>(27);
	const [targetDistance, setTargetDistance] = useState<number>(1000);


	function handleAccelerationChange(event: any) {
		setAcceleration(event.target.value);
	}

	function handleBrakingChange(event: any) {
		setBraking(event.target.value);
	}

	function handleMaxSpeedChange(event: any) {
		setMaxSpeed(event.target.value);
	}

	function handleTargetDistanceChange(event: any) {
		setTargetDistance(event.target.value);
	}

	function calculate(): ResultData {

		// Distances required to fully accelerate and brake at max speed
		const d_accel: number = (maxSpeed * maxSpeed) / (2 * acceleration);
		const d_brake: number = (maxSpeed * maxSpeed) / (2 * braking);
		const totalRequired: number = d_accel + d_brake;

	
		if (totalRequired > targetDistance)
		{
			// Not enough space to reach top speed
			const vSquared: number = (2 * targetDistance) / ((1 / acceleration) + (1 / braking));
        	const achievableSpeed: number = Math.sqrt(vSquared);
	
			const result: ResultData = {
				accelerationDistance: (achievableSpeed * achievableSpeed) / (2 * acceleration),
				coastingDistance: 0,
				brakingDistance: (achievableSpeed * achievableSpeed) / (2 * braking),
				duration: 0,
				accelerationDuration: achievableSpeed / acceleration,
				brakingDuration: achievableSpeed / braking,
				coastingDuration: 0,
				topSpeed: achievableSpeed,
			};

			result.duration = result.accelerationDuration + result.coastingDuration + result.brakingDuration;
			
			return result;
		}
		else
		{
			// Enough space to reach max speed and coast
			const d_coast: number = targetDistance - totalRequired;

			const result: ResultData = {
				accelerationDistance: (maxSpeed * maxSpeed) / (2 * acceleration),
				coastingDistance: d_coast,
				brakingDistance: (maxSpeed * maxSpeed) / (2 * braking),
				duration: 0,
				accelerationDuration: maxSpeed / acceleration,
				brakingDuration: maxSpeed / braking,
				coastingDuration: d_coast / maxSpeed,
				topSpeed: maxSpeed,
			};

			result.duration = result.accelerationDuration + result.coastingDuration + result.brakingDuration;
	
			return result;
		}
	}

	const result = calculate();
	const totalDistance: number = result ? (result.accelerationDistance + result.coastingDistance + result.brakingDistance) : 0;
   
	return (
	  <div className="velocity-main">
		<p className="velocity-input-block">
			<div className="velocity-input-label">Acceleration:</div>
			<input className="velocity-input-box" type="text" value={acceleration} onChange={handleAccelerationChange} />
			<div className="velocity-input-details"> {acceleration} m/s² </div>
		</p>
		<p className="velocity-input-block">
			<div className="velocity-input-label">Braking:</div>
			<input className="velocity-input-box" type="text" value={braking} onChange={handleBrakingChange} />
			<div className="velocity-input-details"> {braking} m/s² </div>
		</p>
		<p className="velocity-input-block">
			<div className="velocity-input-label">Max Speed:</div>
			<input className="velocity-input-box" type="text" value={maxSpeed} onChange={handleMaxSpeedChange} />
			<div className="velocity-input-details"> {maxSpeed} m/s ({maxSpeed * (60*60/1000)} km/h) </div>
		</p>
		<p className="velocity-input-block">
			<div className="velocity-input-label">Distance Travelled:</div>
			<input className="velocity-input-box" type="text" value={targetDistance} onChange={handleTargetDistanceChange} />
			<div className="velocity-input-details"> {targetDistance} m </div>
		</p>

		<p className="velocity-output-block">
			<p className="velocity-output-line">acceleration distance: {result?.accelerationDistance} m</p>
			<p className="velocity-output-line">braking distance: {result?.brakingDistance} m</p>
			<p className="velocity-output-line">duration: {result?.duration} s</p>	
			<p className="velocity-output-line">acceleration duration: {result?.accelerationDuration} s</p>
			<p className="velocity-output-line">coasting duration: {result?.coastingDuration} s</p>
			<p className="velocity-output-line">braking duration: {result?.brakingDuration} s</p>	
			<p className="velocity-output-line">top speed: {result?.topSpeed} m/s</p>
			<p className="velocity-output-line">total distance: {totalDistance} m</p>
		</p>
	  </div>
	);
}

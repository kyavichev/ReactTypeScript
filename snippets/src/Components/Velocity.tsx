
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

	const [acceleration, setAcceleration] = useState<number>(8); // 11.11 is 62mph in 2.5
	const [braking, setBraking] = useState<number>(4);
	const [maxSpeed, setMaxSpeed] = useState<number>(28);
	const [targetDistance, setTargetDistance] = useState<number>(1000);
	const [initialSpeed, setInitialSpeed] = useState<number>(0);
	const [finalSpeed, setFinalSpeed] = useState<number>(0);


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

	function handleInitialSpeedChange(event: any) {
		setInitialSpeed(event.target.value);
	}

	function handleFinalSpeedChange(event: any) {
		setFinalSpeed(event.target.value);
	}

	function calculate(): ResultData {

		// Distance required to accelerate from v0 to vmax
		const d_accel: number = (maxSpeed * maxSpeed - initialSpeed * initialSpeed) / (2 * acceleration);
		// Distance required to decelerate from vmax to vf
		const d_brake: number = (maxSpeed * maxSpeed - finalSpeed * finalSpeed) / (2 * braking);
		const totalRequired: number = d_accel + d_brake;

		// // Distances required to fully accelerate and brake at max speed
		// const d_accel: number = (maxSpeed * maxSpeed) / (2 * acceleration);
		// const d_brake: number = (maxSpeed * maxSpeed) / (2 * braking);
		// const totalRequired: number = d_accel + d_brake;

	
		if (totalRequired > targetDistance)
		{
			// Not enough space to reach top speed
			// const vSquared: number = (2 * targetDistance) / ((1 / acceleration) + (1 / braking));
        	// const achievableSpeed: number = Math.sqrt(vSquared);

			// vmax not reachable: calculate max speed based on distance and initial/final speeds
			const vMaxSquared: number = (2 * acceleration * braking * totalDistance + braking * initialSpeed * initialSpeed + acceleration * finalSpeed * finalSpeed) / (acceleration + braking);
        	const achievableSpeed = Math.sqrt(vMaxSquared);

        	const accelTime = (achievableSpeed - initialSpeed) / acceleration;
        	const brakeTime = (achievableSpeed - finalSpeed) / braking;

			const accelDistance = (achievableSpeed * achievableSpeed - initialSpeed * initialSpeed) / (2 * acceleration);
			const brakeDistance = (achievableSpeed * achievableSpeed - finalSpeed * finalSpeed) / (2 * braking);
	
			const result: ResultData = {
				accelerationDistance: accelDistance,
				coastingDistance: 0,
				brakingDistance: brakeDistance,
				duration: 0,
				accelerationDuration: accelTime,
				brakingDuration: brakeTime,
				coastingDuration: 0,
				topSpeed: achievableSpeed,
			};

			result.duration = result.accelerationDuration + result.coastingDuration + result.brakingDuration;
			
			return result;
		}
		else
		{
			// Enough space to reach max speed and coast
			// const d_coast: number = targetDistance - totalRequired;

			const d_coast: number = targetDistance - totalRequired;

			const accelTime: number = (maxSpeed - initialSpeed) / acceleration;
        	const coastTime: number = d_coast / maxSpeed;
        	const brakeTime: number = (maxSpeed - finalSpeed) / braking;

			const accelDistance = (maxSpeed * maxSpeed - initialSpeed * initialSpeed) / (2 * acceleration);
			const brakeDistance = (maxSpeed * maxSpeed - finalSpeed * finalSpeed) / (2 * braking);

			const result: ResultData = {
				accelerationDistance: accelDistance,
				coastingDistance: d_coast,
				brakingDistance: brakeDistance,
				duration: 0,
				accelerationDuration: accelTime,
				brakingDuration: brakeTime,
				coastingDuration: coastTime,
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
		<p className="velocity-input-block">
			<div className="velocity-input-label">Initial Speed:</div>
			<input className="velocity-input-box" type="text" value={initialSpeed} onChange={handleInitialSpeedChange} />
			<div className="velocity-input-details"> {initialSpeed} m/s ({initialSpeed * (60*60/1000)} km/h) </div>
		</p>
		<p className="velocity-input-block">
			<div className="velocity-input-label">Final Speed:</div>
			<input className="velocity-input-box" type="text" value={finalSpeed} onChange={handleFinalSpeedChange} />
			<div className="velocity-input-details"> {finalSpeed} m/s ({finalSpeed * (60*60/1000)} km/h) </div>
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

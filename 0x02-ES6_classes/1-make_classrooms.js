import ClassRoom from "./0-classroom.js";

/**
 * Creates an array of {@link ClassRoom}s with a specific size.
 * @returns An array of {@link ClassRoom}s.
 */

function initializeRooms(){
	return [19, 20, 30].map((totalSize) => new ClassRoom(totalSize));
}

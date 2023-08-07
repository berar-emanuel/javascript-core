// Function to check if two meetings overlap
function doMeetingsOverlap(meeting1, meeting2) {
  return meeting1.start < meeting2.end && meeting2.start < meeting1.end;
}

// Function to schedule meetings using backtracking
function scheduleMeetings(meetings, rooms, currentRoomIndex) {
  // Base case: if all meetings are scheduled, return true
  if (currentRoomIndex === meetings.length) {
    return true;
  }

  const currentMeeting = meetings[currentRoomIndex];

  // Try to schedule the current meeting in each available room
  for (let i = 0; i < rooms.length; i++) {
    let isRoomAvailable = true;

    // Check if the current meeting overlaps with any meeting already scheduled in the room
    for (const scheduledMeeting of rooms[i]) {
      if (doMeetingsOverlap(currentMeeting, scheduledMeeting)) {
        isRoomAvailable = false;
        break;
      }
    }

    // If the room is available, schedule the current meeting in the room and proceed with the next meeting
    if (isRoomAvailable) {
      rooms[i].push(currentMeeting);

      // Recur for the next meeting
      if (scheduleMeetings(meetings, rooms, currentRoomIndex + 1)) {
        return true; // Found a valid schedule
      }

      // Backtrack: remove the current meeting from the room and try another room
      rooms[i].pop();
    }
  }

  // If we reach here, we couldn't find a valid schedule
  return false;
}

// Example usage:
const MEETINGS = [
  { start: 1, end: 3 },
  { start: 2, end: 4 },
  { start: 3, end: 5 },
  { start: 4, end: 6 },
];

const NUMBER_OF_ROOMS = 2;
const ROOMS = Array.from({ length: NUMBER_OF_ROOMS }, () => []);

if (scheduleMeetings(MEETINGS, ROOMS, 0)) {
  console.log('Suitable schedule found!');
  for (let i = 0; i < NUMBER_OF_ROOMS; i++) {
    console.log(`Room ${i + 1}:`, ROOMS[i]);
  }
} else {
  console.log('No suitable schedule found!');
}

import makeUrl, { TCalendarEvent } from 'add-event-to-calendar';
 
const getCalendarEvent = (Event: TPrivateLesson): TCalendarEvent => ({
   name: `Event name`,
   location: 'Event location',
   details: `Event details`,
   startsAt: 'Event start at',
   endsAt: 'Event end at',
 });
 
 const eventUrls = makeUrl(Event);

import 
function CreateCal (EventArray, SubjectArray, DescriptionArray, LocationArray, BeginArray, EndArray ){
var cal = ics();
for (i in EventArray){
cal.addEvent(SubjectArray[i], DescriptionArray[i], LocationArray[i], BeginArray[i], EndArray[i]);
};
//TEST IN CONSTRUCTION OF ARRAYS: 
console.log("Success")
cal.download(filename);
return true; 
}
//DATA FROM DANTE: 


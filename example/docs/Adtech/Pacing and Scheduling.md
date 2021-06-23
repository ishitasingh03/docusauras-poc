---
id: Pacing and Scheduling
---
## Zone wise Pacing and Scheduling for a Particular Advertisement

### Overview11

This Section lists down the Pacing and Scheduling Info of an Advertisement zone wise (every zone to which this Ad is mapped to). It also provides for an option to Add a Fresh Pacing and Scheduling data for a new zone.The table shows various field such as ZoneId, Scheduled, Status, etc. The field Details shows additional info about. When clicked, it opens up Box containing the additional information. It can also be used to edit or update Pacing ans Scheduling Data for the respective Advertisement.
*NOTE: If you update only one field, rest of the fields will remain same as earlier.

The Search Field at the top right corner of the table can be used to search amongst all mappings across different Zones. (*currently only with Zone wiht ZoneId 2 is Active ). The field Status is a Button which can be used to toggle the status of the Advertisement (Eg from ACTIVE to PAUSED). Note the Difference between the status value of the Advertisement and the status value of the Pacing and Scheduling. The Advertisement Status can have only two values (ACTIVE/PAUSED) whereas as Pacing and Scheduling status can have multiple values (ACTIVE("ACTIVE"),EXPIRED("EXPIRED"),PAUSED("PAUSED"),QUOTA_REACHED("QUOTA_REACHED"),QUEUED("QUEUED")). If the Status is ACTIVE/PAUSED, only then it is possible to toggle the status, otherwise not.


![alt text for screen readers](/img/PS/PS.png "Text to show on mouseover")            

###                     View More
| ELEMENT      | DETAILS |
| ----------- | ----------- |
| LOB      | The Lob for which the Ad is meant for       |
| CampaignId  | Campaign to which this Ad belongs       |
|Lob Ad item Id|Same as Hotel Id. Id if the Hotel to which this Ad belong   |
| Rule  | The Rule Id of the rule governing the Ad. The description of the rule from the Id can be feteched from Rules Section in Rules and Expression      |
| Alternate Text  | Text Displayed in case the Ad does not load for some reasons.      |
| Image URL  | URL from where the Advertisement image is picked.      |
| Redirect URL | URL to which the USER will be redirected if he/she clicks on the Ad.      |


*NOTE: Above Fields mean the same for Adding Fresh Pacing and Scheduling.

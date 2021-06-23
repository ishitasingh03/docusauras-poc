---
id: Advertisements 
---
## Overview

The Advertisement section lists down all the Advertisements of a given Camapiagn and Advertiser. Each Advertiser can have multiple campaigns and each campaign can have muilitple Advertisements. The table shows various field such as Id, Name, Lob (line of business), etc. The field Details shows additional info about the Advertisement. When clicked, it opens up Box containing the information of the Advertisement. It can also be used to edit or update Advertisement. For eg if the RULE of the Advertisement needs to be changed from say 1 to 2, same can be done buy selecting the corresping rule form the Rule textbox and pressing Update Advertisement.
The Search Field at the top right corner of the table can be used to search amongst all advertisements. The field Status is a Button which can be used to toggle the status of the Advertisement (Eg from ACTIVE to PAUSED).

![alt text for screen readers](/img/Advertisment/Advertisement.png "Text to show on mouseover")   

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

### *NOTE: 
If you update only one field, rest of the fields will remain same as earlier.

There is also an option to create a new Advertisement. It can be done by pressing the the Create Advertisement button and filling in the required fields.
The Down arrow Button at the left side of each row shows pacing and Scheduling when clicked
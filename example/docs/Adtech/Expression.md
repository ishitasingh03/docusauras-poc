

An Expression is a representation of a particular specification of a given entity. eg. City Equals to Jaipur entails an Expression. A Given Expression primarily comprises of a LHS Operator and RHS, in the same order. Other relevant properties of an expression are the type, the data type involved in the expression and a relevant description of what the expression is.

![alt text for screen readers](/img/expression/expression.png "Text to show on mouseover")

### Above is an image of the Create Expression page. The fields description are as follows
### Expression type : 
The possible values in this field are LHS_STATIC or RHS_STATIC. In most cases the choice should be RHS_STATIC, unless otherwise specified

### Data type : 
This field denotes the data type of the RHS (Right Hand Side of the Expression). For eg. if we are creating an expression of is City equal to Jaipur, the datatype is String. Likewise it can be integer, or boolean (true or false), or other as visible in the dropdown prompt

### Operator : 
Once we select a datatype, the possible operators for the given datatype will be shown on screen. The operator values are EQ (Equal to), LTE (Lesser than or equal to), and so on. Operator short forms are intuitive and can be chosen based on usecase

### LHS : 
Short form for Left Hand side, the LHS denotes the field for which the given expression is to be made. For example, if we want to know the if the City is Jaipur, Then the CityName will be the LHS value.
### RHS : 
Short form for Right Hand side, the RHS denotes what would would be the value/threshold set of values that the given expression can take. eg. Jaipur is an RHS Value, 5 star rating of a hotel is RHS value The value is entirely dependent on the reason as to why the expression is being made

### Note : 
Update Expression follows a similar format, except that in Update we need to specify the Expression ID that is to be updated. The ID can be obtained from the Expression Table
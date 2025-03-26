//There are Two types of execution context : Global and Functional, Eval exectution context as well.
//There are two phases : memory creation phase or creation Phase  and Execution Phase
// Global execution context will be created, using this, then memory phase is created to store val1 and val2, also function definition
// result 1 and result 2 will also be created and contain undefined just like val1 and val2
// Now in the Execution Phase : val1 = 10, val2 = 5, Now while creating a function : new variable environment + Execution thread
//Whenever we encounter a function we will have to do a memory phase and an execution phase 
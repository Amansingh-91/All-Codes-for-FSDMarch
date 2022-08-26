export const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "ADD_PERSON") {
    return {
      ...state,
      person: [
        ...state.person,
        { id: new Date().getTime().toString(), name: action.payload },
      ],
      isModelDisplay: true,
      ModelMsg: "Person Added",
    };
  }
  if (action.type === "INVALID_INPUT") {
    return {
      ...state,
      isModelDisplay: true,
      ModelMsg: "Name Is Required",
    };
  }
  if (action.type === "REMOVE") {
    const newPerson = state.person.filter(
      (people) => people.id !== action.payload
    );
    return {
      ...state,
      person: newPerson,
      isModelDisplay: true,
      ModelMsg: "Person Removed",
    };
  }
  if (action.type === "CLOSE") {
    return { ...state, isModelDisplay: false };
  }
  throw new Error("Action not found");
};

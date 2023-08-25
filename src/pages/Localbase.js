import Localbase from "localbase";
const LocalBase = () => {
    let myDatabase = new Localbase('myDatabase')
    const insertIntoDB = () =>{
        myDatabase.collection('users').add({
            id:23456789,
            name:"Dogus",
            age: 22
        })
       
    } 
    const getFromDB = () =>{
            myDatabase.collection('users').get().then(users => console.log(users))
        }
        const removeCollection = () =>{
            myDatabase.collection('users').delete()
        }
  return (
    <>
      <button onClick={insertIntoDB}>tilføj en bruger til databasen</button>
      <button onClick={getFromDB}>Hent alle brugere fra databasen</button>
      <button onClick={removeCollection}>slet alle brugere fra databasen</button>
    </>
  );
};

export default LocalBase;

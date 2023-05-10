import React, {useEffect, useState} from 'react';
import PersonCard from './PersonCard'
import { API, graphqlOperation} from 'aws-amplify';
// import peopleData from './data/people.json'

const listPeople = `
  query listPeople {
    listPeople {
      items {
        id
        title
        fullName
        dynamicSlug
        description
      }
    }
  }
`


const People = () => {
  const [peopleData, setPeopleData] = useState([]);

  const loadPeopleData = async() => {
    const { data } = await API.graphql(
      graphqlOperation(listPeople)
    );
    setPeopleData(data?.listPeople?.items)
  }
  
  useEffect(() => {
    loadPeopleData();
  }, []);
  
  return (
    <section id="people" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">People</h2>
        <div className="people-cards">
          {
            peopleData?.map((person) => 
              <PersonCard dynamicSlug={`${person.dynamicSlug}`}
                          fullName={`${person.fullName}`}
                          title={`${person.title}`}
                          description={`${person.description}`}
              />)
          }
        </div>
      </div>
    </section>
  );
}

export default People;
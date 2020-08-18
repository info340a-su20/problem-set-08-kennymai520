import React, { Component } from 'react'; //import React Component
import './style.css';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pets: this.props.pets
    }
  }

  //take a name of the pet
  adopt = (petString) => {
    this.setState( (currentState) => {
      let petsCopy = Object.assign([], currentState.pets);
      let petObj = _.find(petsCopy , ['name', petString]);
      petObj['adopted'] = true;
      return {pets: petsCopy}
    })
  }


  render() {

    let groupBreed = _.groupBy(this.state.pets, 'breed');
    let breedKey = Object.keys(groupBreed);

    return (
      <div>
        <header className="jumbotron jumbotron-fluid py-4">
          <div className="container">
            <h1>Adopt a Pet</h1>
          </div>
        </header>

        <main className="container">
          <div className="row">
            <div id="navs" className="col-3">
              <BreedNav breeds={breedKey} />
              <AboutNav />
            </div>

            <div id="petList" className="col-9">
              <PetList pets={this.state.pets} adoptCallback={this.adopt} />
            </div>
          </div>
        </main>
        <footer className="container">
          <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
        </footer>
      </div>);
  }
}


export class AboutNav extends Component {
  render() {
    return (
      <nav id="aboutLinks">
        <h2>About</h2>
        <ul className="list-unstyled">
          <li><a href="#/">How to Adopt</a></li>
          <li><a href="#/">Volunteering</a></li>
          <li><a href="#/">Events</a></li>
          <li><a href="#/">Donate</a></li>
          <li><a href="#/">About Us</a></li>
        </ul>
      </nav>
    );
  }
}

// acccept a breed props that is an array of strings
// representing the breed
export class BreedNav extends Component {
  render() {
    let breedList = this.props.breeds.map((items) => {
      let component = <li key={items}><a href="#/">{items}</a></li>;
      return component;
    });

    return (
        <nav id="breedLinks">
          <h2>Pick a Breed</h2>
          <ul className="list-unstyled">
            {breedList}
          </ul>            
        </nav>
    );
  }
}

// will be passed a petCard prop in a dog object in the array
export class PetCard extends Component {
  render() {
    let petName = this.props.petCard.name;
    if (this.props.petCard.adopted != undefined) {
      petName = petName + ' (Adopted)'
    }
    return (
      <div className="card" onClick={() => {this.props.adoptCallbacks(this.props.petCard.name)}} >
        <img className="card-img-top" src={this.props.petCard.img} alt={this.props.petCard.name} />
        <div className="card-body">
          <h3 className="card-title">{petName}</h3>
          <p className="card-text">{this.props.petCard.sex + " " + this.props.petCard.breed}</p>
        </div>
      </div>
    );
  }
}

//takes a pets prop as array of pet object
export class PetList extends Component {
  render() {
    let cardList = this.props.pets.map( (item) => {
      let component = <PetCard key={item.name} petCard={item} adoptCallbacks={this.props.adoptCallback} />
      return component;
    })

    return(
      <div>
        <h2>Dogs for Adoption</h2>
        <div className="card-deck">
          {cardList}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>US Senators 2019</h1>
        <SenatorTable senators={this.props.senators} />
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    let senatorItem = this.props.senators.map((item) => 
      <SenatorRow key={item.id} senator={item} />
    )

    return (
      <table className={'table table-bordered'}>
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senatorItem}
        </tbody>
      </table>
    );
  }
}

export class TableHeader extends Component {

  render() {
    let colItems = this.props.cols.map( (colString) => {
      let component = <th key={colString}>{colString}</th>;
      return component;
    })
    return (
      <thead>
        <tr>
          {colItems}
        </tr>
      </thead>
    );
  }
}

//expects a props senator
export class SenatorRow extends Component {
  render() {
    let phoneLink = 'tel:' + this.props.senator.phone;
    let twitterLink = 'https://twitter.com/' + this.props.senator.twitter;
    let state = this.props.senator.party.substring(0,1) + " - " + this.props.senator.state;
    return(
      <tr>
        <td>{this.props.senator.name}</td>
        <td>{state}</td>
        <td><a href={phoneLink}>{this.props.senator.phone}</a></td>
        <td><a href={twitterLink}>{'@' + this.props.senator.twitter}</a></td>
      </tr>
    )
  }
}
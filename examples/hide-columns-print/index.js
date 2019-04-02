import React from 'react';
import ReactDOM from 'react-dom';
import MUIDataTable from '../../src/';

class Example extends React.Component {
  render() {
    const columns = [
      {
        name: 'Name',
        options: {
          filter: true,
          filterType: 'textField',
        },
      },
      {
        label: 'Modified Title Label',
        name: 'Title',
        options: {
          filter: true,
        },
      },
      {
        name: 'Location',
        options: {
          print: false,
          filter: false,
        },
      },
      {
        name: 'Age',
        options: {
          filter: true,
          print: false,
        },
      },
      {
        name: 'Salary',
        options: {
          filter: true,
          sort: false,
          filterType: 'checkbox',
        },
      },
      {
        name: 'Date',
        options: {
          filter: true,
          filterType: 'datePicker',
        },
      },
    ];

    const shortDate = new Date().toLocaleDateString();

    const data = [
      ['Gabby George', 'Business Analyst', 'Minneapolis', 30, '$100,000', shortDate],
      ['Aiden Lloyd', 'Business Consultant', 'Dallas', 55, '$200,000', shortDate],
      ['Jaden Collins', 'Attorney', 'Santa Ana', 27, '$500,000', shortDate],
      ['Franky Rees', 'Business Analyst', 'St. Petersburg', 22, '$50,000', shortDate],
      ['Aaren Rose', 'Business Consultant', 'Toledo', 28, '$75,000', shortDate],
      ['Blake Duncan', 'Business Management Analyst', 'San Diego', 65, '$94,000', shortDate],
      ['Frankie Parry', 'Agency Legal Counsel', 'Jacksonville', 71, '$210,000', shortDate],
      ['Lane Wilson', 'Commercial Specialist', 'Omaha', 19, '$65,000', shortDate],
      ['Robin Duncan', 'Business Analyst', 'Los Angeles', 20, '$77,000', shortDate],
      ['Mel Brooks', 'Business Consultant', 'Oklahoma City', 37, '$135,000', shortDate],
      ['Harper White', 'Attorney', 'Pittsburgh', 52, '$420,000', shortDate],
      ['Kris Humphrey', 'Agency Legal Counsel', 'Laredo', 30, '$150,000', shortDate],
      ['Frankie Long', 'Industrial Analyst', 'Austin', 31, '$170,000', shortDate],
      ['Brynn Robbins', 'Business Analyst', 'Norfolk', 22, '$90,000', shortDate],
      ['Justice Mann', 'Business Consultant', 'Chicago', 24, '$133,000', shortDate],
      ['Addison Navarro', 'Business Management Analyst', 'New York', 50, '$295,000', shortDate],
      ['Jesse Welch', 'Agency Legal Counsel', 'Seattle', 28, '$200,000', shortDate],
      ['Eli Mejia', 'Commercial Specialist', 'Long Beach', 65, '$400,000', shortDate],
      ['Gene Leblanc', 'Industrial Analyst', 'Hartford', 34, '$110,000', shortDate],
      ['Danny Leon', 'Computer Scientist', 'Newark', 60, '$220,000', shortDate],
      ['Lane Lee', 'Corporate Counselor', 'Cincinnati', 52, '$180,000', shortDate],
      ['Jesse Hall', 'Business Analyst', 'Baltimore', 44, '$99,000', shortDate],
      ['Danni Hudson', 'Agency Legal Counsel', 'Tampa', 37, '$90,000', shortDate],
      ['Terry Macdonald', 'Commercial Specialist', 'Miami', 39, '$140,000', shortDate],
      ['Justice Mccarthy', 'Attorney', 'Tucson', 26, '$330,000', shortDate],
      ['Silver Carey', 'Computer Scientist', 'Memphis', 47, '$250,000', shortDate],
      ['Franky Miles', 'Industrial Analyst', 'Buffalo', 49, '$190,000', shortDate],
      ['Glen Nixon', 'Corporate Counselor', 'Arlington', 44, '$80,000', shortDate],
      ['Gabby Strickland', 'Business Process Consultant', 'Scottsdale', 26, '$45,000', shortDate],
      ['Mason Ray', 'Computer Scientist', 'San Francisco', 39, '$142,000', shortDate],
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'scroll',
    };

    return <MUIDataTable title={'ACME Employee list'} data={data} columns={columns} options={options} />;
  }
}

ReactDOM.render(<Example />, document.getElementById('app-root'));


// userProfileCreation.testData.ts stores data used across the 
// the various test cases for the user profile creation functionality

export const userProfileData = {
  mandatory: {
      firstName: 'Dilan',
      lastName: 'Ejah',
      email: 'ejah.dilan@example.com',
      password: 'hello123?',
      confirmPassword: 'hello123?',
    },
    
    optional: {
      gender: 'Male',
      dob: '01-01-1990',
      phoneNumber: '1234567890',
      address: '456 Mol St, Tar 2',
      linkedin: 'https://www.linkedin.com/in/ejah-dilan-a1259b26b/',
      github: 'https://github.com/EjahDil',
    },

    invalidMandatoryData: {
      firstName: 'Dilan12?>',
      lastName: '3454??',
      email: 'ejahexample.com',
      password: "hello12."
    },

    invalidMandatoryDataTwo: {
      firstName: 'Jason34;',
      lastName: 'Tonfack33>/',
      email: 'jason.tonfackexample.com',
    },


    invalidOptionalData: {
      phoneNumber: '435735693767464',
      linkedin: '“https://www.linkedin',
      github: '“https://github./johnsmith',
    },

    invalidOptionalDataTwo: {
      phoneNumber: '+435735693?>',
      linkedin: 'https://www.linkedin/johnsmith',
      github: '“https://github.com/',
    },

  // Empty data for all fields to simulate the blank form submission
  blankData: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    dob: "",
    phoneNumber: "",
    address: "",
    linkedin: "",
    github: ""
  }

}
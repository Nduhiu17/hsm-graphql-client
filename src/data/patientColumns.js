const patientColumns = [
  { title: 'Name', field: 'name' },
  { title: 'Mobile Number', field: 'mobileNumber' },
  { title: 'ID Number', field: 'idNumber' },
  { title: 'Contact Person', field: 'contactPerson' },
  { title: 'Contact Person Mobile', field: 'contactPersonNumber' },
  {
    title: 'Gender',
    field: 'gender',
    lookup: { 34: 'Male', 63: 'Female' },
  }
]

export default patientColumns

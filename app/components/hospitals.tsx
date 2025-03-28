const institutions = [
  { 
    name: '',
    logo: '',
  }
]

export default function Timeline() {
  return(
    <div>
    {institutions.map((institution) => <div key={institution.name}>
      {institution.logo}
    </div>)}
    </div>
  )
}

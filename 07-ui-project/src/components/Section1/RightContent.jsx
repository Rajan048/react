// import RightCard from './RightCard'

// const RightContent = ({users}) => {
//   return (
//     <div className='h-full flex flex-nowrap overflow-x-auto gap-10 w-2/3 p-6 '>
//       <RightCard users={users}/>
//       <RightCard />
//       <RightCard />
//     </div>
//   )
// }

// export default RightContent





import RightCard from './RightCard'

const RightContent = ({ users }) => {
  return (
    <div id='right' className='h-full flex flex-nowrap overflow-x-auto gap-10 w-2/3 p-6'>
      {users.map((user, index) => (
        <RightCard key={index} user={user} index={index + 1} />
      ))}
    </div>
  )
}

export default RightContent

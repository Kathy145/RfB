import React from 'react'


const Header = (props) => (
  // Implicit E6 Arrow Stateless Functional Component

    <React.Fragment>
        <header className="top">
          <h1>
          Catch
          <span className="ofThe">
            <span className="of"> of </span>
            <span className="the"> the </span>
          </span>          
          Day
          </h1>
          <h3 className="tagline">
            <span>{props.tagline}</span>
          </h3>
        </header>
      </React.Fragment>
  )

// Optional Ways to write Functional Components

// const Header = ({tagline, date}) => (
//   // Implicit E6 Arrow Stateless Functional Component w/ Destructed Prop Variable

//     <React.Fragment>
//         <header className="top">
//           <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of"> of </span>
//             <span className="the"> the </span>
//           </span>          
//           Day
//           </h1>
//           <h3 className="tagline">
//             {/* <span>{tagline}</span> */}
//             <span>
//               {tagline} {date}
//             </span>
//           </h3>
//         </header>
//       </React.Fragment>
//   )


// const Header = (props) => {
//   // E6 Arrow Functional Component
//   return(
//     <React.Fragment>
//         <header className="top">
//           <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of"> of </span>
//             <span className="the"> the </span>
//           </span>          
//           Day
//           </h1>
//           <h3 className="tagline">
//             <span>{props.tagline}</span>
//           </h3>
//         </header>
//       </React.Fragment>
//   )
  
// }
 

// function Header(props) {
//   // Stateless Functional Component
//   return(
//     <React.Fragment>
//         <header className="top">
//           <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of"> of </span>
//             <span className="the"> the </span>
//           </span>          
//           Day
//           </h1>
//           <h3 className="tagline">
//             <span>{props.tagline}</span>
//           </h3>
//         </header>
//       </React.Fragment>
//   )
// }


// class Header extends React.Component {
//    // Traditional Functional Component
//   render(){
//     return (
//       <React.Fragment>
//         <header className="top">
//           <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of"> of </span>
//             <span className="the"> the </span>
//           </span>          
//           Day
//           </h1>
//           <h3 className="tagline">
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//       </React.Fragment>
//     )
//   }
// }

export default Header

import React from 'react';
function Uservd2({ name, pic }) {
    return (
    <section>
    <img className="user-profile-pic" src={pic} alt={name} />
    <h2 className="user-name">
    Hello, <span className="user-first-name">{name}</span> 🎉🔥
    </h2>
    </section>
    );
   }
   export default Uservd2;
import React from 'react';
import s from './Contacts.module.css'

type ContactsPropsType = {
    contacts:ContactsPropsType
}

export const Contacts = (props: ContactsPropsType) => {
    return <div>
        {
        props.contacts.map(m => {
            debugger
            return (
                <div className={s.bodyContacts} key={m.id}>
                    <div className={s.icon}>
                        <img src={m.fotoIcon}/>
                        <button>Follow</button>
                    </div>

                    <div className={s.info}>
                        <div className={s.infoText}>
                            <span className={s.nameUser}{m.fullName}</span>
                        <p className={s.status}>{m.status}</p>
                    </div>

                    <div className={s.country}>{m.location.coutntry}</div>
                    <div className={s.city}>{m.location.city}</div>

                </div>



        )
        })}
    </div>
};


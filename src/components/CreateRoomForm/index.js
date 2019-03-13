import React from 'react'
import style from './index.module.css'

export const CreateRoomForm = ({ submit,onChange }) => (
  <form
    className={style.component}
    onSubmit={e => {
      e.preventDefault()
      submit({
        name: e.target[0].value,
        private: e.target.elements[2].checked,
      })
      e.target[0].value = ''
    }}
  >
    <input onChange={onChange}
    placeholder="Search or create new room" />
    <button>
      <input type="checkbox" />
      <svg>
        <use xlinkHref="index.svg#lock" />
      </svg>
    </button>
  </form>
)

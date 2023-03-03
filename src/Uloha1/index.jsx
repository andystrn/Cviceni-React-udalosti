import React from 'react'
import './style.css'

// Zadání: Po kliku na tlačítko zobraz bublinu s textem „Ahoj“.

export const Uloha1 = () => {
	return <button onClick={() => alert('ahoj')}>Ukaž bublinu</button>
}

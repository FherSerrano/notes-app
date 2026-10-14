import { useState } from "react"

const NoteForm = () => {
    const [formData, setFormData] = useState ({
        title: '',
        category: 'work',
        priority: 'Medium',
        description: ''

    })

    const [isFormVisible, setFormVisible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ... formData,
            [e.target.name]: e.target.value

        })
    }
    


}
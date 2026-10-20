const NoteList = () => {
    if(notes.length ===0){
    return(
        <p className = "Text-center text-gray-500">
            </p>
    )

}

    return(
        <div className="space-y-4">
            {notes.map((note)=>
                <div key={note.id} className= "p-4 bg-white rounded-lg shadow-md border-1-4">
                    <h3 className="text-lg font-bold">
                        {note.title}
                        </h3>
                        <p className = "Text-sm text-gray-600">
                            <strong>Category</strong> {note.category}
                            </p>
                            <p className = "Text-sm text-gray-600">
                                <strong>Priority</strong> {note.priority}
                                </p>
                                <p className="mt-2">
                                    {note.description}
                                    </p>
                                    </div>
            )}
            </div>
    )
}

export default NoteList 
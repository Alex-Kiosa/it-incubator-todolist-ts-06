import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type EditableSpanProps = {
    title: string
    onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanProps) {
    // console.log("EditableSpan is rendering")
    const [editMode, setEditMode] = useState("off")
    const [title, setTitle] = useState("")

    const activateEditMode = () => {
        setEditMode("on")
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode("off")
        props.onChange(title)
    }
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    if (editMode === "off") {
        return <span onDoubleClick={activateEditMode}>{props.title}</span>
    } else {
        return <input 
            onBlur={activateViewMode} 
            value={title}
            onChange={onChangeHandler}
            autoFocus
        />
    }
}
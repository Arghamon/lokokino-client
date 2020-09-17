import React from 'react';
import { Input } from './AppModalQuesitonForm'

export default function AppModalQuestionTags({ onChange, tags }) {

    return (
        <Input
            placeholder="type tags here"
            defaultValue={tags}
            name="tags"
            onChange={onChange}
            style={{ marginTop: 15, width: 490 - 28 }}
        />
    )
}

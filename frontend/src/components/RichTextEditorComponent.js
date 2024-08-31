import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

function RichTextEditorComponent({ value = '', onChange, isEditing }) {
    const quillRef = useRef(null);
    const [quillInstance, setQuillInstance] = useState(null);

    useEffect(() => {
        if (quillRef.current && !quillInstance) {
            const editor = new Quill(quillRef.current, {
                theme: 'snow',
                readOnly: !isEditing,
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                },
            });

            editor.on('text-change', () => {
                const text = editor.root.innerHTML;
                onChange(text);
            });

            setQuillInstance(editor);
        }
    }, [isEditing, quillInstance, onChange]);

    useEffect(() => {
        if (quillInstance && value !== quillInstance.root.innerHTML) {
            quillInstance.root.innerHTML = value;
        }
    }, [value, quillInstance]);

    useEffect(() => {
        if (quillInstance) {
            quillInstance.enable(isEditing);
        }
    }, [isEditing, quillInstance]);

    return <div ref={quillRef} />;
}

export default RichTextEditorComponent;

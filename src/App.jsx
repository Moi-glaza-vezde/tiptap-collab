import React from "react";
import {useEditor, EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import * as Y from "yjs";
import {HocuspocusProvider} from "@hocuspocus/provider";

const ydoc = new Y.Doc();
const provider = new HocuspocusProvider({
    url: "ws://localhost:1990",
    name: "my-document",
    document: ydoc,
});

export default function App() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Collaboration.configure({document: ydoc}),
        ],
    });

    return (
        <div style={{width: 700,paddingLeft:'20px'}}>
            <h2> Demo</h2>
            <EditorContent
                style={{
                    background: "#fff",
                    color: "#000"
                }}
                editor={editor}/>
        </div>
    );
}

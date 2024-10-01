import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

export default function TextEditor({ defaultValue = '', label }) {
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      <Editor
        apiKey={import.meta.env.VITE_TINY_MCE_API}
        initialValue={defaultValue}
        init={{
          initialValue: defaultValue,
          height: 300,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",

            "table",
            "code",
            "help",
            "wordcount"
          ],
          toolbar:
            'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic | alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
    </div>
  )
}
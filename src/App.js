import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useState } from 'react';

function App() {
  const [texto, setTexto] = useState('')

  return (
    <div className="App">
      <CKEditor editor={ClassicEditor} onChange={(event, editor) => setTexto(editor.getData())} />

      texto<br />
      -------<br />
      {texto}

    </div>
  );
}

export default App;

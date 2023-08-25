import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parallax from "../components/Parallax/Parallax.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Parallax>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium eos et odio odit quae quam
          quibusdam quidem unde, voluptatem? Accusantium earum eius fugiat iste itaque natus odit, suscipit? Atque?
        </span>
        <span>
          Architecto, atque dicta ducimus et eveniet ex hic magni minus nam perferendis, provident rerum vitae! Cupiditate
          dolore fugit ipsa laborum laudantium maiores odit placeat quia recusandae tempore, tenetur ullam, voluptatum.
        </span>
        <span>
          A animi aut beatae corporis delectus doloremque dolores ducimus explicabo harum labore maxime necessitatibus
          nemo neque non quam quas quia quos rerum saepe tempore temporibus totam, ullam unde ut voluptas.
        </span>
        <span>
          Amet architecto assumenda cum enim in inventore minus ullam, voluptate! Accusantium amet beatae consequuntur
          cum eaque et exercitationem fugit ipsa iste maxime officiis, placeat quasi quia ratione tenetur totam ut?
        </span>
        <span>
          Aperiam deserunt, dolor est perspiciatis placeat praesentium quas tempora. Consectetur consequuntur error hic
          nihil officiis perferendis possimus quasi! Ab assumenda aut, consequatur cupiditate delectus eligendi id in
          laborum modi nulla?
        </span>
        <span>
          Ea incidunt omnis velit veritatis. Aut commodi dolor in iusto magni porro velit voluptate! Animi blanditiis
          cum deleniti, dignissimos, ea fugiat harum ipsum labore modi nam nisi velit vero, voluptatibus.
        </span>
        <span>
          Ad, commodi dolores itaque quas quo repudiandae sunt voluptas? Dolorum magnam necessitatibus pariatur. Dicta
          dolor enim facere ipsum maiores sunt veritatis. Ab dolor expedita in optio sit. Adipisci, aliquam, dolore?
        </span>
        <span>
          Alias, beatae culpa debitis dolor dolorem doloremque eius, et fugit hic impedit ipsam natus nesciunt nisi
          numquam obcaecati provident quasi, recusandae voluptate. Et quas qui ratione tempore totam. Deserunt, dolore.
        </span>
        <span>
          Architecto aut dolorum harum odio porro quas repellat repellendus rerum sit suscipit. Amet atque eaque et
          molestiae pariatur quaerat soluta! Ad est explicabo magni maiores nisi placeat sunt veritatis vitae.
        </span>
        <span>
          At blanditiis debitis dignissimos error est facilis id nulla, quam repellendus repudiandae. Atque ea, eligendi,
          est et harum ipsa labore minima minus odit qui quibusdam quo recusandae sit sunt vitae.
        </span>
        <span>
          Deleniti earum magnam vitae voluptatibus. Assumenda consequatur debitis delectus, et ex laborum modi molestiae,
          numquam quas, repellat sunt totam! Alias debitis, eum fuga in iste magni minima non repudiandae soluta!
        </span>
        <span>
          Ab aut beatae, consequuntur cupiditate earum et excepturi exercitationem facere facilis ipsum, iusto sit, unde
          voluptate voluptatem voluptates? Dolorem facere in itaque non obcaecati provident quam repellendus rerum tempore vero.
        </span>
        <span>
          Aspernatur est fugiat inventore ipsum laborum maxime nostrum quaerat quisquam soluta, voluptates. Amet consectetur
          cupiditate ea, est ex excepturi illo iure necessitatibus neque nisi numquam obcaecati perferendis placeat sit vel.
        </span>
        <span>
          A beatae earum iusto numquam possimus quaerat sint temporibus tenetur velit veniam? Consectetur dicta dolorem
          dolorum ipsa ipsam iure modi necessitatibus obcaecati, officiis, possimus reprehenderit sint sunt tempore
          voluptatem voluptatibus.
        </span>
        <span>
          Ab accusamus animi aut corporis culpa eius, est eveniet, excepturi fuga ipsa ipsam libero mollitia necessitatibus
          nemo nihil, non recusandae reprehenderit repudiandae sed voluptas. Blanditiis delectus iure quos repellendus totam!
        </span>
        <span>
          Cum expedita quod repellat. A accusantium commodi ducimus ea eligendi eos error et eveniet ex, expedita itaque
          laborum minima nulla, quae quaerat, qui quia quo quod repudiandae saepe ut voluptatibus?
        </span>
        <span>
          Autem consequatur ducimus ea eaque excepturi iure mollitia nemo obcaecati perspiciatis placeat quam qui quia,
          quod similique, soluta unde veniam vero vitae! Assumenda consequuntur dignissimos doloremque incidunt iusto neque
          repellat!
        </span>
        <span>
          Ab amet asperiores at delectus eligendi expedita maxime natus, necessitatibus nemo officiis possimus quae rem repellat rerum, sequi temporibus voluptate voluptatem. Adipisci aspernatur assumenda et illum obcaecati quas rerum vel.</span><span>Accusamus accusantium ad alias aliquam animi at consectetur consequatur cum dicta dignissimos et fugit, impedit ipsam, minima numquam odit officia possimus quia repellat sequi sit tempore tenetur totam vero voluptas.</span><span>A culpa dolores error esse eum illo iste omnis perferendis quos ratione recusandae rem sit, voluptatum. Accusamus, aliquam, distinctio dolor eos est facere inventore laboriosam nemo pariatur quae quo soluta!</span>
      </p>
    </Parallax>
  )
}

export default App

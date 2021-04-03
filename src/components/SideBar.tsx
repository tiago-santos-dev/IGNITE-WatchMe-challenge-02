import { GenreResponseProps } from '../App'
import { Button } from './Button'
interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: (id: number) => void;
}

const SideBar = ({ genres, selectedGenreId, setSelectedGenreId }: SideBarProps) => {

  function handleClickButton (id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}

export default SideBar;
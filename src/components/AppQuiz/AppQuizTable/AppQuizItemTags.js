
import { Item } from './AppQuizItemControls';

export default function AppQuizItemTags({tags}) {
    return <Item tile={3}>{tags.map((tag, index) => <span key={index} style={{ marginRight: 5 }}>{tag},</span>)}</Item>
}

import Nav from '../components/nav'
import NavItem from '../components/navItems'
import List from '../components/list'
import ListItem from '../components/listItem'

export default function Movies({ movies }: any) {
    return (
        <div className="divide-y divide-slate-100">
            <Nav>
                <NavItem href="/new" isActive>New Releases</NavItem>
                <NavItem href="/top" isActive={false}>Top Rated</NavItem>
                <NavItem href="/picks" isActive={false}>Vincent’s Picks</NavItem>
            </Nav>
            <List>
                {movies.map((movie: any) => (
                    <ListItem key={movie.id} movie={movie} />
                ))}
            </List>
        </div>
    )
}
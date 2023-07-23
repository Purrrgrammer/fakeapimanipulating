import { Post } from '@/interface/placeHolder'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'


export default function Posts({ id, title, body }: Post) {
    return (
        <Link to={`/post/${id}`} className="text-decoration-none" >
            <Card style={{ width: "100%", height: "300px", overflow: "hidden", paddingBottom: "1rem", marginBottom: "2rem" }} >
                <Card.Body className='h-100'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{body}</ Card.Text>
                </ Card.Body>
            </Card >
        </Link>
    )
}

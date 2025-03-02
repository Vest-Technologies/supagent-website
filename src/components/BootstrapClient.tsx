'use client';

import { Container as RBContainer, Row as RBRow, Col as RBCol, Card as RBCard } from 'react-bootstrap';

export function Container(props: any) {
  return <RBContainer {...props} />;
}

export function Row(props: any) {
  return <RBRow {...props} />;
}

export function Col(props: any) {
  return <RBCol {...props} />;
}

export function Card(props: any) {
  return <RBCard {...props} />;
}

export function CardBody(props: any) {
  return <RBCard.Body {...props} />;
}

export function CardTitle(props: any) {
  return <RBCard.Title {...props} />;
}

export function CardText(props: any) {
  return <RBCard.Text {...props} />;
}

export function CardHeader(props: any) {
  return <RBCard.Header {...props} />;
}

export function CardFooter(props: any) {
  return <RBCard.Footer {...props} />;
} 
import styled from 'styled-components';

interface CardProps {
  img: string;
  title: string;
  price: string;
}

export default function Card({ img, title, price }: CardProps) {
  return (
    <>
      <Layout>
        <Image src={img} />
        <TextLayout>
          <h1>{title}</h1>
          <Price>{price}원</Price>
        </TextLayout>
      </Layout>
    </>
  );
}

const Layout = styled.div`
  width: 18.25rem;
  /* height: 22.375rem; */
  border-radius: 0.75rem;

  border: 1px solid black;
`;

const Image = styled.img`
  width: 18.25rem;
  height: 13rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;

  border: 1px solid black;
`;

const TextLayout = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 17.5rem;
  flex-direction: column;
  padding: 0rem 1rem;
  margin-bottom: 2.25rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    height: 2.25rem;
    width: 16rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  text-align: right;
`;

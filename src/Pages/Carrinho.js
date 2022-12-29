import React from "react";
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useCart } from "react-use-cart";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import { BsCartCheck, BsCartX} from 'react-icons/bs';

export const Carrinho = () => {
    const [theme] = useThemeHook();
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem, 
        emptyCart,
    } = useCart();

    return (
        <Container className="py-4 mt-5">
            <h1 className={`${theme? 'text-light' : 'text-light-primary'} my-5 text-center`}>
                {isEmpty? 'Seu carrinho esta vazio.' : 'Seu carrinho:'}
            </h1>
            <Row className="justify-content-center">
                <Table responsive="sm" striped bordered hover variant={theme? 'dark' : 'light'} className="mb-5">
                    <tbody>
                        {items.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div 
                                            style={{background:'white', height:'8rem', overflow:'hidden', display:'flex',
                                            justifyContent:'center', alignItems:'center'}}
                                        >
                                            <div style={{padding:'.5rem'}}>
                                                <img src={item.image} style={{width: '4rem'}} alt={item.title}/>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{whiteSpace:'nowrap', width: '14rem', overflow:'hidden', textOverflow:'ellipsis'}}>
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>R${item.price}</td>
                                    <td>Quantidade({item.quantity})</td>
                                    <td>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity -1)} className="ms-2">-</Button>
                                        <Button onClick={() => updateItemQuantity(item.id, item.quantity +1)} className="ms-2">+</Button>
                                        <Button variant="danger" onClick={() => removeItem(item.id)} className="ms-2">Excluir Item</Button>
                                    </td>
                                </tr>
                            )
                        })}
  
                    </tbody>
                </Table>
                {!isEmpty &&
                    <Row 
                        style={{ position:'fixed', bottom: 0,}}
                    className={`${theme? 'bg-black-ligh text-light' : 'bg-light text-black'} justify-content-center`}
                    >
                        <Col>
                            <h4>Valor Total: R$ {cartTotal}</h4>
                        </Col>
                        <Col className="p-=" md={4}>
                            <Button variant="danger"
                                className="m-2"
                                onClick={() => emptyCart()}
                            >
                                <BsCartX size="1.7rem"/>
                                Limpar carrinho
                            </Button>
                            <Button variant="success"
                                className="m-2"
                                onClick={() => emptyCart()}
                            >
                                <BsCartCheck size="1.7rem"/>
                                Finalizar compra
                            </Button>
                        </Col>
                    </Row>    
                }
            </Row>
        </Container>
    );
};
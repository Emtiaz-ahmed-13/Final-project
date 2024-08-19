import { Tabs, Tab, TabList, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom";
import { useState } from "react";
import UseMenu from "../../../Hooks/UseMenu";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drink'];

    const { category } = useParams(); 
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drink');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className="flex justify-center space-x-4">
                    <Tab className="px-4 py-2 cursor-pointer">Salad</Tab>
                    <Tab className="px-4 py-2 cursor-pointer">Pizza</Tab>
                    <Tab className="px-4 py-2 cursor-pointer">Soup</Tab>
                    <Tab className="px-4 py-2 cursor-pointer">Dessert</Tab>
                    <Tab className="px-4 py-2 cursor-pointer">Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad} />
                </TabPanel>
                <TabPanel>
                    
                    <OrderTab items={pizza} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts} />
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;

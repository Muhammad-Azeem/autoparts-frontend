import { UnorderedList, ListItem, Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

function ViewMoreList({ items }) {
    const initialVisibleItems = 2;
    const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

    const toggleItems = () => {
        if (visibleItems === initialVisibleItems) {
            setVisibleItems(items.length);
        } else {
            setVisibleItems(initialVisibleItems);
        }
    };

    return (
        <div>
            <UnorderedList className="detail-box2-subheading" padding={0}>
                {items.slice(0, visibleItems).map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                ))}
            </UnorderedList>

                <Text cursor="pointer " onClick={toggleItems} className="detail-box2-subheading" color="grey" margin={0} fontSize="14px">
                    {visibleItems === initialVisibleItems ? 'View More' : 'View Less'}
                </Text>

        </div>
    );
}

export default ViewMoreList;

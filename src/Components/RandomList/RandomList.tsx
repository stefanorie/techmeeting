import * as React from 'react';
import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

function RandomList() {
    const listItems = [];
    for (let i = 0; i < 1000; i++) {
        listItems.push(Math.floor(Math.random() * 1000));
    }

    return (
        <List dense style={{ maxHeight: 600, overflowY: 'auto' }}>
            {listItems.map((value, index) => (
                <ListItem key={index} button>
                    <ListItemAvatar>
                        <Avatar>😎</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={value} />
                    <ListItemSecondaryAction>
                        <Checkbox onChange={undefined} checked={false} />
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default React.memo(RandomList);

import * as React from 'react';
import { Avatar, Checkbox, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { AutoSizer, List, ListRowProps } from 'react-virtualized';

function RandomListVirtualized() {
    const listItems: number[] = [];
    for (let i = 0; i < 1000; i++) {
        listItems.push(Math.floor(Math.random() * 1000));
    }

    const renderRow = ({ index, style }: ListRowProps) => {
        return (
            <div style={style}>
                <ListItem key={index} button>
                    <ListItemAvatar>
                        <Avatar>😎</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={listItems[index]} />
                    <ListItemSecondaryAction>
                        <Checkbox onChange={undefined} checked={false} />
                    </ListItemSecondaryAction>
                </ListItem>
            </div>
        );
    };

    return (
        <AutoSizer disableHeight>
            {({ width }) =>
                <List
                    style={{ listStyle: 'none' }}
                    height={600}
                    width={width}
                    rowCount={listItems.length}
                    rowHeight={52}
                    rowRenderer={renderRow}
                    overscanRowCount={2}
                />
            }
        </AutoSizer>
    );
}

export default React.memo(RandomListVirtualized);

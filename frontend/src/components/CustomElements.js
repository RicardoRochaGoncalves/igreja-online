import React from 'react';

export const BoldElement = props => {
    return <strong {...props.attributes}>{props.children}</strong>;
};

export const ItalicElement = props => {
    return <em {...props.attributes}>{props.children}</em>;
};

export const CodeElement = props => {
    return <code {...props.attributes} style={{ backgroundColor: '#f5f5f5', padding: '2px 4px', borderRadius: '4px' }}>{props.children}</code>;
};

export const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }

    if (leaf.italic) {
        children = <em>{children}</em>;
    }

    if (leaf.code) {
        children = <code>{children}</code>;
    }

    return <span {...attributes}>{children}</span>;
};

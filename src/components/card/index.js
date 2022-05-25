import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const Card = ({titulo, children}) => {
    return (
        <View style={styles.container_card}>
            <View style={styles.card}>
                <View style={styles.card_header}>
                    <Text style={styles.card_header_text}>{titulo}</Text>
                </View>

                <View style={styles.card_content}>
                    {children}
                </View>
            </View>
        </View>
    );
}

export default Card;
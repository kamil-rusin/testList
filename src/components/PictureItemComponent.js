import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';

const PictureItemComponent = (props) => {
    const { loadInBrowser, item } = props;

    return (
        <View style={styles.listItem}>
            <Image style={styles.image} source={{ uri: item.download_url }} />
            <View style={styles.detailsContainer}>
                <View style={styles.row}>
                    <Text style={styles.author}>{item.author}</Text>
                    <Badge
                        containerStyle={styles.badge}
                        badgeStyle={styles.badgeStyle}
                        value={item.id}
                    />
                </View>
                <Text onPress={() => loadInBrowser(item.url)} style={styles.website}>
                    Url: {item.url}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1d548b',
        flexDirection: 'row',
        marginBottom: 3,
        margin: 5,
    },
    detailsContainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 5,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 2,
        marginRight: 10,
    },
    image: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: 10,
    },
    author: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    badge: {
        marginLeft: 'auto',
    },
    badgeStyle: {
        borderRadius: 35,
        width: 38,
        height: 38,
        marginBottom: 5,
    },
    website: {
        fontSize: 13,
        color: '#606060',
    },
});

export default PictureItemComponent;

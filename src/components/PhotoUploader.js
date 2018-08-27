import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload'

export default class PhotoUploader extends Component {

    render() {
        return (
            <PhotoUpload
                onPhotoSelect={avatar => {
                    if (avatar) {
                        this.props.onSelect(avatar);
                    }
                }} >
                <Image
                    style={{
                        width: 90,
                        height: 90,
                        borderRadius: 20
                    }}
                    resizeMode='cover'
                    source={{
                        uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                    }} />
            </PhotoUpload>
        )
    }
}
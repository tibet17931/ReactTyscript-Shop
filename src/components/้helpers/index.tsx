import React from "react";

import { Modal, Button, Space } from 'antd';
import { modalDialog } from '../../types'
import { resolve } from "dns";

export const infoModal = (text: modalDialog) => {
    Modal.info({
        title: text.title,
        content: (
            <div>
                <p>{text.content}</p>
            </div>
        ),
        onOk() { },
    });
}

export const successModal = (text: modalDialog) => {
    Modal.success({
        content: text.content,
        onOk() { },
    });
}

export const error = (text: modalDialog) => {
    Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
    });
}

export const warningModal = (text: modalDialog) => {
    Modal.warning({
        title: text.title,
        content: text.content,
    });
}

export const renderBase64 = (file: any) => {
    return new Promise((resolve) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            let base64file: any = reader.result;
            resolve(base64file)
        };
    })

}
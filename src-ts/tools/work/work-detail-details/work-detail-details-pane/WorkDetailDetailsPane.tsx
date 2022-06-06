import { Link } from '@reach/router'
import _ from 'lodash'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'

import { LoadingSpinner } from '../../../../lib'
import { workFactoryMapFormData } from '../../../../lib/work-provider/work-functions/work-factory'

import styles from './WorkDetailDetailsPane.module.scss'

interface WorkDetailDetailsPaneProps {
    formData: any,
    isReviewPage?: boolean,
    redirectUrl?: string
}

const WorkDetailDetailsPane: FC<WorkDetailDetailsPaneProps> = ({ formData, isReviewPage = false, redirectUrl = '' }: WorkDetailDetailsPaneProps) => {
    const [details, setDetails]: [any, Dispatch<SetStateAction<any>>] = useState<any>(undefined)

    useEffect(() => {
        if (formData && formData.basicInfo) {
            setDetails(workFactoryMapFormData(formData?.workType?.selectedWorkType, formData.basicInfo))
        }
    }, [formData])

    if (!details) {
        return <LoadingSpinner />
    }

    return (
        <div className={styles['paneContent']}>
            {isReviewPage && (
                <div className={styles['header']}>
                    <h3 className={styles['title']}>REVIEW REQUIREMENTS</h3>
                    <Link className={styles['link']} to={redirectUrl}>
                        edit
                    </Link>
                </div>
            )}
            {Object.keys(details).map((key) => {
                const detail: { title: string, value: any } = details[key]
                return (
                    detail && (
                        <div key={key} className={styles['detail']}>
                            <h4 className={styles['title']}>{detail.title}</h4>
                            <p className={styles['content']}>{formatOption(detail.value)}</p>
                        </div>
                    )
                )
            })}
        </div>
    )
}

function formatOption(detail: Array<string> | {} | string): string | Array<JSX.Element> | JSX.Element {
    const noInfoProvidedElement: JSX.Element = <span className={styles['no-info']}>Not provided</span>
    const isEmpty: boolean = checkIsEmpty(detail)
    if (isEmpty) {
        return noInfoProvidedElement
    }
    if (_.isArray(detail)) {
        return detail.map((val, index) => (<div key={`${index}`}>{val}</div>))
    }
    if (_.isObject(detail)) {
        return Object.keys(detail).map((key) => {
            const value: any = detail[key as keyof typeof detail] || noInfoProvidedElement
            return <div key={`${key}`}>{`${key}: `}{value}</div>
        })
    }
    return detail
}

function checkIsEmpty(detail: Array<string> | {} | string): boolean {
    return !detail ||
        (typeof detail === 'string' && detail.trim().length === 0) ||
        (_.isArray(detail) && detail.length === 0) ||
        (_.isObject(detail) && Object.values(detail).filter((val) => val && val.trim().length !== 0).length === 0)
}

export default WorkDetailDetailsPane

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppRootStateType, AppDispatch } from '../store/store';
import { useEffect, useState, useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'


export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


export function useInterval(callback: () => void, delay: number | null) {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useIsomorphicLayoutEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        // Note: 0 is a valid value for delay.
        if (!delay && delay !== 0) {
            return
        }

        const id = setInterval(() => savedCallback.current(), delay)

        return () => clearInterval(id)
    }, [delay])
}


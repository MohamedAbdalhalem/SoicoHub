"use client"
import ReactPaginate from 'react-paginate'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { modifyPageAction } from '@/lib/action'

export default function MainPagination({ numberOfPages, currentPage, nextPage }: { numberOfPages: number, currentPage: number, nextPage: number }) {
    const pageChage = async function ({ selected }: { selected: number }) {
        await modifyPageAction(selected + 1)
    }
    return (
        <nav aria-label='Post pagination' className='flex w-full justify-center pt-2'>
            <ReactPaginate
                forcePage={currentPage - 1}
                breakLabel='…'
                nextLabel={
                    <>
                        <span className='hidden sm:inline'>Next</span>
                        <ChevronRight aria-hidden='true' className='size-4' />
                    </>
                }
                onPageChange={pageChage}
                pageRangeDisplayed={3}
                pageCount={numberOfPages}
                previousLabel={
                    <>
                        <ChevronLeft aria-hidden='true' className='size-4' />
                        <span className='hidden sm:inline'>Previous</span>
                    </>
                }
                // renderOnZeroPageCount={null}
                className='flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-[#e5e8ee] bg-[#f7f8fb] p-2 shadow-sm dark:border-[#303a4c] dark:bg-[#1b2330]'
                pageClassName='flex'
                pageLinkClassName='flex size-9 items-center justify-center rounded-xl text-sm font-medium text-[#5d6677] transition-colors hover:bg-[#eceef9] hover:text-[#4f43d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8] dark:text-[#b7c1d1] dark:hover:bg-[#293447] dark:hover:text-[#c9c2ff]'
                activeClassName='rounded-xl bg-[#5b4fe8] text-white shadow-sm dark:bg-[#5b4fe8]'
                activeLinkClassName='!text-white hover:!bg-[#4f43d8] hover:!text-white dark:hover:!bg-[#4f43d8]'
                previousClassName='flex'
                previousLinkClassName='flex h-9 items-center justify-center gap-1 rounded-xl px-2 text-sm font-medium text-[#5d6677] transition-colors hover:bg-[#eceef9] hover:text-[#4f43d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8] dark:text-[#b7c1d1] dark:hover:bg-[#293447] dark:hover:text-[#c9c2ff] sm:px-3'
                nextClassName='flex'
                nextLinkClassName='flex h-9 items-center justify-center gap-1 rounded-xl px-2 text-sm font-medium text-[#5d6677] transition-colors hover:bg-[#eceef9] hover:text-[#4f43d8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5b4fe8] dark:text-[#b7c1d1] dark:hover:bg-[#293447] dark:hover:text-[#c9c2ff] sm:px-3'
                breakClassName='flex'
                breakLinkClassName='flex size-9 items-center justify-center rounded-xl text-sm text-[#7b8393] dark:text-[#9da9bc]'
                disabledClassName='pointer-events-none opacity-40'
                previousAriaLabel='Go to previous page'
                nextAriaLabel='Go to next page'
            // pageAriaLabelBuilder={(page) => `Go to page ${page}`}
            />
        </nav>
    )
}

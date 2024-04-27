"use client";

import Button from "@ownui-system/components/Button";
import Text from "@ownui-system/components/Text";
import Flex from "@ownui-system/shared/Flex";
import { colors } from "@ownui-system/styles/colors";
import clsx from "clsx";
import { useId, useLayoutEffect, useMemo, useState } from "react";

/**
 * totalItems: 전체 데이터 갯수
 *
 * currentPage: 현재 페이지
 *
 * limit: 노출될 페이지네이션 갯수
 *
 * dataPerPage: 한 페이지 내에서 노출되는 데이터 갯수
 */
type PaginationProps = {
  totalItems: number;
  currentPage: number;
  limit: number;
  dataPerPage: number;
  onClickPage: (page: number) => void;
};

function Pagination({
  totalItems,
  currentPage,
  limit,
  dataPerPage,
  onClickPage,
}: PaginationProps) {
  const id = useId();

  const [pageGroup, setPageGroup] = useState(1);
  const start = Math.ceil(pageGroup - 1) * limit + 1;

  const { lastPageGroup, pageArray } = useMemo(() => {
    const totalPage = Math.ceil(totalItems / dataPerPage);
    const lastPageGroup = Math.ceil(totalPage / limit);
    const pageArray = [];

    for (let i = start; i < Math.min(totalPage + 1, start + limit); i++) {
      pageArray.push(i);
    }

    return {
      lastPageGroup,
      pageArray,
    };
  }, [limit, totalItems, start, dataPerPage]);

  function onClickNext() {
    const newGroup = pageGroup + 1;

    setPageGroup((prev) => prev + 1);
    onClickPage((newGroup - 1) * limit + 1);
  }

  function onClickPrev() {
    const newGroup = pageGroup - 1;

    setPageGroup((prev) => prev - 1);
    onClickPage((newGroup - 1) * limit + 1);
  }

  useLayoutEffect(() => {
    if (pageGroup > 1 && currentPage === 1) {
      setPageGroup(1);
    }
  }, [currentPage, pageGroup]);

  return (
    <Flex align="center" className="gap-[24px]">
      <Button disabled={pageGroup === 1} isOnlyIcon onClick={onClickPrev}>
        Prev
      </Button>
      <Flex align="center" className="gap-[8px]">
        {pageArray.map((n, idx) => (
          <Button
            key={`${id}-${idx + 1}`}
            className={clsx(
              "!w-[32px] !h-[32px] !p-0 rounded-[100px] ",
              currentPage === n ? "bg-gray-100" : "",
            )}
            onClick={() => onClickPage(n)}
          >
            <Flex align="center" className="w-full" justify="center">
              <Text bold={currentPage === n} color={colors.gray800}>
                {n}
              </Text>
            </Flex>
          </Button>
        ))}
      </Flex>
      <Button
        disabled={pageGroup >= lastPageGroup}
        isOnlyIcon
        onClick={onClickNext}
      >
        Next
      </Button>
    </Flex>
  );
}

export default Pagination;
